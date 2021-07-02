import { memo } from "react";

const Small = memo(({ value }) => {

    console.log('Me volví a mostrar xd');
    return (
        <small>
            { value }
        </small>
    )
})

export default Small
