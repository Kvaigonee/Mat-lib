import IMatrix from "./IMatrix";

/**
 *
 */
export default abstract class AbstractMatrix<T extends IMatrix> implements IMatrix {

    abstract add(value: T): void;

    abstract multiply(value: T): void;

    abstract addScalar(value: number): void;

}