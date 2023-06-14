class calculatorModel 
{
    constructor(){}

    evaluateExpression(expression) 
    {
        try {
            return Promise.resolve({message: eval(expression)});;
        } catch (error) {
            throw new Error("Error al evaluar la expresión: " + error.message);
        }
    }
}

class calculatorBackendModel
{
	constructor()
	{

	}

	async calculateExpression(expression)
	{
		try
		{
			let requestMetadata = 
			{
				method: "POST",
				body: JSON.stringify(expression)
			};
			
			let r = await fetch('http://localhost:1337/', requestMetadata )
			let j = await r.json();
			
			return j;
		}
		catch( error )
		{
		  console.log('Error!');
		}
	}
}

export { calculatorModel, calculatorBackendModel };