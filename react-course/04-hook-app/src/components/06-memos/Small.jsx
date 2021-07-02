import { memo } from "react";

// Memo: memorize something, only if its properties have changed it'll be rendered again.
const Small = memo(({ value }) => {

    console.log('Me volví a mostrar xd');
    return (
        <small>
            { value }
        </small>
    )
})

export default Small
