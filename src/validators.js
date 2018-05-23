
export const required = value => {

console.log(value, value ? undefined : 'Required' )
return  value ? undefined : 'Required';
} 
    
export const nonEmpty = value =>
{
 return value.trim() !== '' ? undefined : 'Cannot be empty';
}
  

    export const lengthCheck = value => (value.length===5 ? undefined: 'must be 5 characters')
export const isNumber = value => ( /^[0-9]+$/.test(value) ? undefined: 'must be numbers');

//     // Uses a regular expression (regex) to check whether it looks enough like an
// // email address.  Broken down:
// // ^ Matches the start the text
// // \S+ Matches one or more non-whitespace characters before the @
// // @ A literal at sign
// // \S+ Matches one or more non-whitespace characters after the @
// // $ Matches the end of the text
// export const email = value =>
//     /^\S+@\S+$/.test(value) ? undefined : 'Must be a valid email address';