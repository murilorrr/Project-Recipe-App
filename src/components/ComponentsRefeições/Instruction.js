import React from "react";

function Instruction({strInstructions}) {
    return(
        <p data-testid="instructions">
          {strInstructions}
        </p>
    );
}

export default Instruction;
