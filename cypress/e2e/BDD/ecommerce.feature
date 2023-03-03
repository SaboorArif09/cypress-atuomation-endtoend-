Feature: End to End Ecommerce Validation

    Application Regression
@Regression
Scenario: Ecommerce Product delivery 
Given I open ecommerce page
When I add items to cart 
And Validate the total price 
Then Select the country submit and verify Thankyou

@Smoke
Scenario: Fill out the Form  
Given I open ecommerce page
When I fill the form details 
| name | gender |
| Bobz | Male   |
Then Validate the form behaviour
And Select the shop page