FactoryGirl.define do
  factory :user do
    first_name "Ellis"
    last_name "Burlegartner"
    email "ellis@example.com"
    password "password"
    street "1234 Sesame Street"
    city "Raleigh"
    state "NC"
    zip_code "27617"
    role 2
    active true
    approved false
    about "I've got two children, Lori and Peter, ages 5 and 6 respectively. They're terrible kids."
  end
end
