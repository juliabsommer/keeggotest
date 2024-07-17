Verify product image update via API

    Given the user is authenticated
    When the user sends a PUT request to update the product image
    Then the response status should be 200
    And the product image should be updated
    And the response should contain the new image ID