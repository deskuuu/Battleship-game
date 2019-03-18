import { Dashboard } from '../dashboard';

const dashboardFactory = {
    create(width,height) {
        const gameGrid = new Dashboard(width,height);

        return gameGrid;
    }
}

export { dashboardFactory };