/**
 *
 */
export default interface IMatrix {

    add(value: IMatrix) : void;

    addScalar(value: number) : void;

    multiply(value: IMatrix) : void;

}