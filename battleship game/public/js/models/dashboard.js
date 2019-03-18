import { validateNumber } from '../utils/validator';

class Dashboard {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get width() {
        return this.width;
    }
    set width(width) {
        try {
            this.width = validateNumber(width);
        } catch (error) {
            return error;
        }
    }

    get height() {
        return this.height;
    }
    set height(height) {
        try {
            this.height = validateNumber(height);
        } catch (error) {
            return error;
        }
    }

}

export { Dashboard };