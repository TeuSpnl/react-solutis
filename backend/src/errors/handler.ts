import { ErrorRequestHandler } from 'Express';
import { ValidationError } from 'yup'

interface ValidationErrors {
    [key: string]: string[];
}


const errorHandler : ErrorRequestHandler = (error, request, response, next) => {
    if (error instanceof ValidationErrors) {
        let errors: ValidationError = {};

        error.inner.forEach(err =>{
            errors[err.path] = err.errors;
        });

        return response.status(400).json({ message: 'Validaton fail', errors});
    }

    console.error(error);

    return response.status(500).json({ message: 'internal server error' });
};

export default errorHandler;