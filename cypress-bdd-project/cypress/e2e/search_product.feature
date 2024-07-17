Verify product search via API

    Given the user sends a GET request to search for "tablet"
    Then the response status should be 200
    And the response should contain products related to "tablet"