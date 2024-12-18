<!-- this is for the index.html -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    we use some images out of font awesome to make it so that

for the nav element we have the logo first,
then an unordered list followed up with links to every other webpaged

we use an html format which goes like a div after every element, we used it for 1. header, 2. main but for the main we also have a section element as a part of the format 3. footer

for the css we use external css and have linked it to every on of the files

side note:
Almost every other webpage is the same so just have to explain that everything is same format
<!-- end for index.html -->

<!-- Explaination for the javascript -->
first lines function is for the form handling

we getElelmentById for all the selected fields
instead of putting required at the end of each field we put it in here to have an alert message that pops to say "Please fill in all the required fields

we have email validation
there is an if statement if the "not" of emailRegex is true it will give you an alert message of "pleease enter a valid email address"

same for phone validation

const formData gets all the form data ready to send to a database

let solutionMessage assigns a general blank changable variable
in the form page that if the user chooses different choices like renewable, waste, education or community we coded a swtich case that will store the message in the variable solutionMessage and then break to the next step which will dispalay solutionMessage as it is coded alert(solutionMessage)

just for demonstration purposes if we actually wanted to have it send data to to a backend we store the form data into local storage and will send in a JSON web file format

eventually after all of that we will have redirection to the login successful page

note to self: still need to explain the validation processes, return false
<!-- end of explaination for javascript -->

<!-- Explaination for the css -->
we use a .root global css to set a main style standard

set property to grid that we use in some html files containing grids
the properties .grid-container, .solutions-grid, etc are all a part of the same style

navigation is set with nav element, it has certain styles for the logo on the nav and the unordered list (ul) and anchor element the anchor element also has an active and hover

the responsive design is done with media query
and webkit is actually called webtoolkit that is used when you're unsure if the styles will appear for older and more incomptable browsers

most styles are for when you hover or styles for display
<!-- end of explaination for the css -->
