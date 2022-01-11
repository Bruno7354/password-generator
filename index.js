const PORT = 8080
const express = require('express')
const app = express()
const path = require('path')
const { stringify } = require('querystring')
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const options = {
    origin:"https://sifet.com.br/"
}

app.use(cors(options))

app.use(express.static(path.join(__dirname, 'client')))

app.post('/settings',(req,res)=>{
    let length = req.body.length
    let upper = req.body.upper
    let lower = req.body.lower
    let numbers = req.body.numbers
    let symbols = req.body.symbols
    res.json(JSON.stringify(generatePassword(length,upper,lower,numbers,symbols)))
})

function generatePassword(length,upper,lower,numbers,symbols) {

    if (upper ==="yes" && lower ==="yes" && numbers ==="yes" && symbols ==="yes") {
        
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*()-+.,;?{[}]^><:)';
    
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result

    } else if (upper ==="yes" && lower ==="yes" && numbers ==="yes") {
        
                var result           = '';
                var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            
                var charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;

            } else if (upper ==="yes" && lower ==="yes" && symbols ==="yes") {
                var result           = '';
                var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*()-+.,;?{[}]^><:';
            
                var charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            } else if (upper ==="yes" && numbers ==="yes" && symbols ==="yes") {
                
                var result           = '';
                var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()-+.,;?{[}]^><:';
            
                var charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;

            } else if (lower ==="yes" && numbers ==="yes" && symbols ==="yes") {
                
                var result           = '';
                var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()-+.,;?{[}]^><:';
            
                var charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;

            }else if (upper ==="yes" && lower ==="yes") {
                
                        var result           = '';
                        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                    
                        var charactersLength = characters.length;
                        for ( var i = 0; i < length; i++ ) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                        }
                        return result;

                    } else if (upper ==="yes" && numbers ==="yes") {
                        var result           = '';
                        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                    
                        var charactersLength = characters.length;
                        for ( var i = 0; i < length; i++ ) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                        }
                        return result;
                    } else if (upper ==="yes" && symbols ==="yes") {   

                        var result           = '';
                        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()-+.,;?{[}]^><:';
                    
                        var charactersLength = characters.length;
                        for ( var i = 0; i < length; i++ ) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                        }
                        return result;

                    } else if (lower ==="yes" && numbers ==="yes") {
                        
                        var result           = '';
                        var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
                    
                        var charactersLength = characters.length;
                        for ( var i = 0; i < length; i++ ) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                        }
                        return result;

                    } else if (lower ==="yes" && symbols ==="yes") {
                        
                        var result           = '';
                        var characters       = 'abcdefghijklmnopqrstuvwxyz!@#$%&*()-+.,;?{[}]^><:';
                    
                        var charactersLength = characters.length;
                        for ( var i = 0; i < length; i++ ) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                        }
                        return result;

                    } else if (numbers ==="yes" && symbols ==="yes") {
                        
                        var result           = '';
                        var characters       = '0123456789!@#$%&*()-+.,;?{[}]^><:';
                    
                        var charactersLength = characters.length;
                        for ( var i = 0; i < length; i++ ) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                        }
                        return result;

                    } else if (upper === "yes" ) {
                                var result           = '';
                                var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                            
                                var charactersLength = characters.length;
                                for ( var i = 0; i < length; i++ ) {
                                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                                }
                                return result;
                        } else if (lower === "yes") {
                                var result           = '';
                                var characters       = 'abcdefghijklmnopqrstuvwxyz';
                            
                                var charactersLength = characters.length;
                                for ( var i = 0; i < length; i++ ) {
                                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                                }
                                return result;
                        } else if (numbers === "yes") {
                                var result           = '';
                                var characters       = '0123456789';
                            
                                var charactersLength = characters.length;
                                for ( var i = 0; i < length; i++ ) {
                                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                                }
                                return result;
                        } else if (symbols ==="yes"){
                                var result           = '';
                                var characters       = '!@#$%&*()-+.,;?{[}]^><:';
                            
                                var charactersLength = characters.length;
                                for ( var i = 0; i < length; i++ ) {
                                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                                }
                                return result;
                        }


 }

app.listen(PORT,()=>{
    console.log(`Server rodando na porta ${PORT}`)
})


