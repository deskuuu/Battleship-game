import { BattleShip } from '../battleShip';

const battleShipFactory = {
    create(width) {
        const battleShip = new BattleShip(width);

        return battleShip;
    }
}

export { battleShipFactory };