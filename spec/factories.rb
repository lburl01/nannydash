FactoryGirl.define do
  factory :user do
    id 1
    first_name "Ellis"
    last_name "Burlegartner"
    email "ellis@example.com"
    password "password"
    street "1234 Sesame Street"
    city "Raleigh"
    state "NC"
    zip_code "27617"
    role 2
    birthday "04/29/2001"
    hourly_rate 10.01
    cpr_certification false
    first_aid_certification false
    recommendation_one_name "Person One"
    recommendation_one_email "person1@example.com"
    recommendation_two_name "Person Two"
    recommendation_two_email "person2@example.com"
    recommendation_three_name "Person Three"
    recommendation_three_email "person3@example.com"
    active false
    approved false
    about "I've got two children, Lori and Peter, ages 5 and 6 respectively. They're terrible kids."
    phone_number "555-555-5555"
    county "Wake"
    is_deleted false
  end

  factory :recipient, class: User do
    id 2
    first_name "Miles"
    last_name "Burlegartner"
    email "miles@example.com"
    password "password"
    street "1234 Sesame Street"
    city "Raleigh"
    state "NC"
    zip_code "27617"
    role 2
    birthday "04/29/2011"
    hourly_rate 10.01
    cpr_certification false
    first_aid_certification false
    recommendation_one_name "Person One"
    recommendation_one_email "person1@example.com"
    recommendation_two_name "Person Two"
    recommendation_two_email "person2@example.com"
    recommendation_three_name "Person Three"
    recommendation_three_email "person3@example.com"
    active true
    approved false
    about "I've got two children, Lori and Peter, ages 5 and 6 respectively. They're terrible kids."
    phone_number "555-555-5555"
    county "Wake"
    is_deleted false
  end

  factory :job do
    id 1
    user_id 1
    date "2016-11-17"
    start_time "15:34:06.88851"
    end_time "18:34:06.888555"
    notes "My kid is allergic to bad colors. Don't wear the color red, please"
    confirmed false
    is_deleted false
    is_assigned false
  end
end
