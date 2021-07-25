import React from 'react'
import { Link } from 'react-router-dom';
import { InputTypes } from './Types';

const ReusableInputs = ({label,type,placeholder,formik,beforeLinkText,link,textLink,name}:InputTypes) =>  {
    return (
       <section>
           <div className="form-group">
               <label>
                   {label}
               </label>
               <input 
            //    onChange={formik && formik.handleChange}
            onChange={formik.handleChange}
                 type={type}
                 placeholder={placeholder}
                 value={formik.values[name]}
                 name={name }
                />
                <div className="d-inline">
                    <small className="px-4 text-danger float-start">
                        {formik?.touched[name] && formik?.errors[name]}
                    </small>
                    <div>
                        {beforeLinkText && (
                            <small className="float-end text-primary">{beforeLinkText}</small>
                        )}
                        {link && (
                            <Link to={link}>
                                <small className="float-end">{textLink}</small>
                            </Link>
                        )}
                    </div>
			</div>
           </div>
       </section>
    )
}

export default ReusableInputs;
