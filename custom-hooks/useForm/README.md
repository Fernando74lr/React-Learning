#useForm Hook

Ejemplo de uso:

```
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    };
    
    const [ formValues, habdleInputChange, reset ] = useForm(initialForm);
```