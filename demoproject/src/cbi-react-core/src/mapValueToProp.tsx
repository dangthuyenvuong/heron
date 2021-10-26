import React from "react";

export function mapValueToProp<T>(WrapperComponent: React.FC<T>, hookFunction: () => T): React.FC<T> {

    return () => <WrapperComponent {...hookFunction()} />

}