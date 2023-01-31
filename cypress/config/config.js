
class config {
    GetURL() {
        let envi = Cypress.env('ENV');
            switch (envi) 
            {
                case 'production':
                    URL = "";
                case 'staging':
                    URL = "";
                case "dev": 
                    URL= "https://dev.f6l-new.mobelite.fr/";
                    
            }
            return(URL)
    }
}export default config;