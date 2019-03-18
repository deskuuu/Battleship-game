import { Destroyer } from '../destroyer';

const destroyerFactory = {
    create(width) {
        const destroyer = new Destroyer(width);

        return destroyer;
    }
}

export { destroyerFactory };