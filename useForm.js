import { useState } from "react";


/**

useForm is a custom hook that provides a form state object and methods to update it.
@param {Object} [initialState={}] - An optional object to initialize the form state with.
@returns {Object} An object containing:
formState: An object that represents the current state of the form.
handleInputChange: A function to update the formState object when an input value changes.
handleRememberMeCheck: A function to update the formState object when the "Remember me" checkbox is checked or unchecked.
handleSubmit: A function to handle the form submission.
*/

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState)

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value })
  }
  const handleRememberMeCheck = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.checked })
  }

  const reset = () => {
    setFormState(initialState);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return [formState, handleInputChange, handleRememberMeCheck, handleSubmit, reset]
}

/* *
 * Example usage:
 *
 *
 * * import { useForm } from './useForm'
 *
 * const MyForm = () => {
 *   const { formState, handleInputChange, handleRememberMeCheck, handleSubmit } = useForm({
 *     username: '',
 *     password: '',
 *     rememberMe: false
 *   })
 *
 *   const onSubmit = () => {
 *     console.log('Submitted form data:', formState)
 *     // TODO: Add custom logic to submit the form data to a server.
 *   }
 *
 *   return (
 *     <form onSubmit={handleSubmit}>
 *       <label>
 *         Username:
 *         <input type="text" name="username" value={formState.username} onChange={handleInputChange} />
 *       </label>
 *       <br />
 *       <label>
 *         Password:
 *         <input type="password" name="password" value={formState.password} onChange={handleInputChange} />
 *       </label>
 *       <br />
 *       <label>
 *         Remember me:
 *         <input type="checkbox" name="rememberMe" checked={formState.rememberMe} onChange={handleRememberMeCheck} />
 *       </label>
 *       <br />
 *       <button type="submit" onClick={onSubmit}>Submit</button>
 *     </form>
 *   )
 * }
 *
 */
