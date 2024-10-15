
 //  Object
const countrySelectionField = 'input[type="text"][placeholder="Type to Select"]'

const autoSuggestedCountry = 'li a[id]:contains("'

const selectedCountry = '#autosuggest'


class HomePageObjects{
   
    /**
     * Get Country Selection Field
     * @return countrySelectionField
     * @memberof HomePageObjects
     */
    getcountrySelectionField(){
        return cy.get(countrySelectionField)
    }
    /**
     * Get auto Suggested Country
     * @return autoSuggestedcountryName
     * @memberof HomePageObjects
     */
    getAutoSuggestedCountry(countryName){
        return cy.get(autoSuggestedCountry + countryName +'")') 
    }
   /**
    * Get Selected Country
    * @return selectedCountry
    * @memberof HomePageObjects
    */
   getSelectedCountry(){
        return cy.get(selectedCountry)
    }
   

}
export default HomePageObjects;