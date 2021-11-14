/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
    name = $('#name')
    email = $('#email')
    year = $('#year')
    color = $('#color')

    const response = await axios({
        method: "POST",
        url: `/api/get-lucky-num`,
        data: {name, email, year, color},
      });

    handleResponse(response)
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
    newContainer = document.createElement('div')
    newUl = document.createElement('ul')
    liOne = document.createElement('li')
    liTwo = document.createElement('li')
    liThree = document.createElement('li')
    liFour = document.createElement('li')

    liOne.innerText = `Your year: ${response["year"]["year"]}`
    liTwo.innerText = `Fact: ${response["year"]["fact"]}`
    liThree.innerText = `Your lucky num: ${response["num"]["num"]}`
    liFour.innerText = `Your lucky num: ${response["num"]["fact"]}`

    newContainer.append(newUl)
    newUl.append(liOne, liTwo, liThree, liFour)

    $("#lucky-results").append(newContainer)
}

$("#lucky-form").on("submit", processForm);
