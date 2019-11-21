class RouteController {
    constructor(activeRouteID) {
        this.activeRouteID = activeRouteID;
        this.applicationRouteArray = [];

        this.__init();
        this.__restoreRoute();
    }

    __init = () => {
        const sidebarRoutes = document.getElementById('sidebar-routes').children;
        const sections = document.getElementsByTagName('section');

        if (sidebarRoutes.length !== sections.length) {
            console.error('FATAL ERROR: Not equal routes.');
            return;
        }

        for (let i = 0; i < sections.length; i++) {
            const routeObject = {
                route : sidebarRoutes[i],
                section : sections[i]
            };
            this.applicationRouteArray.push(routeObject);
        }

        this.applicationRouteArray.map(route => {
            route.route.classList.remove('active-route');
            route.section.style.display = 'none';

            route.route.addEventListener('click', () => {
                this.activateRoute(route.section.id);
            }, true);
        });


    };
    __restoreRoute = () => {
        const routeID = localStorage.getItem('routeID');

        if (routeID) {
            this.activateRoute(routeID);
        } else {
            this.activateRoute(this.activeRouteID);
        }
    };
    activateRoute = (routeID) => {
        this.applicationRouteArray.map(route => {
            if (route.section.id !== routeID) {
                route.section.style.display = 'none';
                route.route.classList.remove('active-route');
            } else {
                route.route.classList.add('active-route');
                route.section.style.display = 'flex';
                localStorage.setItem('routeID', route.section.id);
            }
        });
    };
}
class CategoryTableController {
    constructor() {
        this.addButtonRef = null;
        this.editButtonRef = null;
        this.removeButtonRef = null;
        this.refreshButtonRef = null;
        this.confirmButtonRef = null;
        this.cancelButtonRef = null;
        this.tableBodyRef = null;

        this.tableData = null;
        this.selectedRowIndex = null;

        this.blurMode = false;

        this.init();
        this.hangEvents();
    }
    init = () => {
        this.addButtonRef = document.getElementById('categories-add');
        this.editButtonRef = document.getElementById('categories-edit');
        this.removeButtonRef = document.getElementById('categories-remove');
        this.refreshButtonRef = document.getElementById('categories-refresh');
        this.tableBodyRef = document.getElementById('categories-table-body');
    };
    hangEvents = () => {

    };
    selectRow = (rowIndex) => {
        const rows = this.tableBodyRef.getElementsByTagName('admin-table-row');
        const row = this.tableBodyRef.getElementsByTagName('admin-table-row')[rowIndex];

        this.selectedRowIndex = rowIndex;

        for (const _row of rows) {
            if (_row === row) {
                row.className += ' selected';
            } else {
                row.classList.remove('selected');
            }
        }
    };
    refresh = () => {
        HTTP.get(window.location.href + '/category/get')
            .then((payload) => {
                this.tableData = payload;
                this.render();
            })
            .catch((error) => console.error(error));
    };
    render = () => {
        this.tableBodyRef.innerHTML = null;

        for (let i = 0; i < this.tableData.length; i++) {
            const adminTableRow = document.createElement('admin-table-row');
            adminTableRow.innerHTML = `
                <label>#${i}</label>
                <label>${this.tableData[i].name}</label>
                <label>${this.tableData[i].slug}</label>
                <label>${this.tableData[i].content}</label>
                <label>${this.tableData[i].views}</label>
                <label>${new Date(this.tableData[i].timestamp).toLocaleDateString()}</label>
                <label>${this.tableData[i].status === true ? 'On' : 'Off'}</label>
                <label>${this.tableData[i].trash === true ? 'Removed' : 'Active'}</label>
            `;
            adminTableRow.addEventListener('click', this.selectRow.bind(this, i), true);
            this.tableBodyRef.appendChild(adminTableRow);
        }
    };
}

const routeController = new RouteController('categories-section');
const categoryTableController = new CategoryTableController();
      categoryTableController.refresh();
