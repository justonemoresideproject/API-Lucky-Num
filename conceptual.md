### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
a standard used in webpage design to create efficient routes

- What is a resource?
information such as an object or database entity

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
because an api is designed to pass information across applications and a form cannot be sent over json

- What does idempotent mean? Which HTTP verbs are idempotent?
idempotent means reusable. The get, post and patch verbs are idempotent but the delete is not as once something is deleted it cannot be deleted again

- What is the difference between PUT and PATCH?
the PUT verb replaces the resource while the PATCH verb updates the resource

- What is one way encryption?
encryption that cannot be reverse engineered. Once a value is passed through it cannot be passed in reverse to get the same result

- What is the purpose of a `salt` when hashing a password?
to add a variable string to encryption so that a dictionary of all possible encrypted values cannot be created and used against the one way encryption

- What is the purpose of the Bcrypt module?
encryption

- What is the difference between authorization and authentication?
authorization is allowing a new user to enter authentication is reproving that user is allowed in
