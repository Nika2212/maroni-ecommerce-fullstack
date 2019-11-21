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
    }
    init = () => {
        this.tableBodyRef = document.getElementById('categories-table-body');
    };
    refresh = () => {
        HTTP.get(window.location.href + '/category/get')
            .then((payload) => this.render(payload))
            .catch((error) => console.error(error));
    };
    render = (payload) => {
        this.tableBodyRef.innerHTML = null;

        for (let i = 0; i < payload.length; i++) {
            this.tableBodyRef.innerHTML += `
                <admin-table-row>
                    <label>#${i}</label>
                    <label>${payload[i].name}</label>
                    <label>${payload[i].slug}</label>
                    <label>${payload[i].content}</label>
                    <label>${payload[i].views}</label>
                    <label>${new Date(payload[i].timestamp).toLocaleDateString()}</label>
                    <label>${payload[i].status === true ? 'On' : 'Off'}</label>
                    <label>${payload[i].trash === true ? 'Removed' : 'Active'}</label>
                </admin-table-row>
            `;
        }
    };
}

const routeController = new RouteController('categories-section');
const categoryTableController = new CategoryTableController();
      categoryTableController.refresh();
