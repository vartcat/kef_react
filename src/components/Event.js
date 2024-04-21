import Button from "./Button.js"

export default function Event({rgbValue, id, ...otherProps}) {

    return (
        <div style={{backgroundColor : rgbValue}}>
            <h1>Evènement numéro : {id}</h1>
            <Button {...otherProps}/>
        </div>
    )
}