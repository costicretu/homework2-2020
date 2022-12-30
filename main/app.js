function addTokens(input, tokens){
    if(typeof(input) !== `string`) {
        throw new Error("Invalid input");
    }
    if(input.length < 6) {
        throw new Error(`Input should have at least 6 characters`);
    }
	tokens.forEach((token) => {
		if (typeof(token.tokenName) != `string` || token.hasOwnProperty(`tokenName`) == false || Object.keys(token).length > 1) {
			throw new Error(`Invalid array format`); 
        }
	});
	if (!(input.includes(`...`))) {
		return input;
	}
	tokens.forEach((token) => {
		input = input.replace(`...`, `\${${token.tokenName}}`);
	});
	return input;
}

const app = {
    addTokens: addTokens
}

module.exports = app;