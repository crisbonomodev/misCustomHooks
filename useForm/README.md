
#useForm hook
```
import React, {Fragment} from 'react'
import { useForm } from '../../hooks/useForm';
import './effect.css';
export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm ({
        name: '',
        email: '',
        password: ''
    });
    //desestructuramos
    const {name,email,password} = formValues;

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(formValues);
    }
 
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text"
                 name="name"
                 className="form-control"
                 autoComplete="off"
                 value={name}
                 placeholder="Nombre"
                 onChange={handleInputChange}
                 />
            </div>

            <div className="form-group">
                <input type="text"
                 name="email"
                 className="form-control"
                 autoComplete="off"
                 value={email}
                 placeholder="Email"
                 onChange={handleInputChange}
                 />
            </div>

            <div className="form-group">
                <input type="password"
                 name="password"
                 className="form-control"
                 autoComplete="off"
                 value={password}
                 placeholder="******"
                 onChange={handleInputChange}
                 />
            </div>
            <button type="submit" className="btn btn-primary" on>Guardar</button>
            </form>
        </Fragment>

        
    )
}

```