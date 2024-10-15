import HomePage from "../support/wiring/HomePage/HomePageFunctions"

const homePage = new HomePage()

describe ("Select Country", ()=>{
    it ("Country Selection", ()=>{
        const countryName = "Bangladesh";
        cy.visit('/')
        homePage.selectCountrySelectionField()
        homePage.typeCountryName("BAN")
        cy.waitTillVisible('li a[id]:contains("'+ countryName + '")')
        homePage.selectAutoSuggestedCountry(countryName)
        homePage.assertCoutrySelectedSuccesfully(countryName)
    })
})