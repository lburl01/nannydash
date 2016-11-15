5.times do |index|
  User.create!(first_name: Faker::Name.first_name,
                last_name: Faker::Name.last_name,
                email: Faker::Internet.email,
                password: Faker::Internet.password(8),
                street: Faker::Address.street_address,
                city: Faker::Address.city,
                state: Faker::Address.state_abbr,
                zip_code: Faker::Address.zip_code,
                county: "Wake",
                role: 0,
                phone_number: Faker::PhoneNumber.phone_number)
end

10.times do |index|
  User.create!(first_name: Faker::Name.first_name,
                  last_name: Faker::Name.last_name,
                  email: Faker::Internet.email,
                  password: Faker::Internet.password(8),
                  street: Faker::Address.street_address,
                  city: Faker::Address.city,
                  state: Faker::Address.state_abbr,
                  zip_code: Faker::Address.zip_code,
                  county: "Wake",
                  role: 1,
                  phone_number: Faker::PhoneNumber.phone_number,
                  is_deleted: false,
                  active: false,
                  approved: false,
                  about: Faker::ChuckNorris.fact)
end

10.times do |index|
  User.create!(first_name: Faker::Name.first_name,
                  last_name: Faker::Name.last_name,
                  email: Faker::Internet.email,
                  password: Faker::Internet.password(8),
                  street: Faker::Address.street_address,
                  city: Faker::Address.city,
                  state: Faker::Address.state_abbr,
                  zip_code: Faker::Address.zip_code,
                  county: "Durham",
                  role: 1,
                  phone_number: Faker::PhoneNumber.phone_number,
                  is_deleted: false,
                  active: true,
                  approved: true,
                  about: Faker::ChuckNorris.fact)
end

10.times do |index|
  User.create!(first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    email: Faker::Internet.email,
                    password: Faker::Internet.password(8),
                    street: Faker::Address.street_address,
                    city: Faker::Address.city,
                    state: Faker::Address.state_abbr,
                    zip_code: Faker::Address.zip_code,
                    county: "Wake",
                    role: 2,
                    birthday: "04/20/1980",
                    hourly_rate: Faker::Number.decimal(2),
                    cpr_certification: true,
                    first_aid_certification: true,
                    recommendation_one_name: Faker::Name.name,
                    recommendation_one_email: Faker::Internet.email,
                    recommendation_two_name: Faker::Name.name,
                    recommendation_two_email: Faker::Internet.email,
                    recommendation_three_name: Faker::Name.name,
                    recommendation_three_email: Faker::Internet.email,
                    phone_number: Faker::PhoneNumber.phone_number,
                    is_deleted: false,
                    active: true,
                    approved: false)
  end

5.times do |index|
  User.create!(first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    email: Faker::Internet.email,
                    password: Faker::Internet.password(8),
                    street: Faker::Address.street_address,
                    city: Faker::Address.city,
                    state: Faker::Address.state_abbr,
                    zip_code: Faker::Address.zip_code,
                    county: "Durham",
                    role: 2,
                    birthday: "05/20/1990",
                    hourly_rate: Faker::Number.decimal(2),
                    cpr_certification: false,
                    first_aid_certification: true,
                    recommendation_one_name: Faker::Name.name,
                    recommendation_one_email: Faker::Internet.email,
                    recommendation_two_name: Faker::Name.name,
                    recommendation_two_email: Faker::Internet.email,
                    recommendation_three_name: Faker::Name.name,
                    recommendation_three_email: Faker::Internet.email,
                    phone_number: Faker::PhoneNumber.phone_number,
                    is_deleted: false,
                    active: true,
                    approved: false)
  end

5.times do |index|
  User.create!(first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    email: Faker::Internet.email,
                    password: Faker::Internet.password(8),
                    street: Faker::Address.street_address,
                    city: Faker::Address.city,
                    state: Faker::Address.state_abbr,
                    zip_code: Faker::Address.zip_code,
                    county: "Orange",
                    role: 2,
                    birthday: "05/20/1990",
                    hourly_rate: Faker::Number.decimal(2),
                    cpr_certification: false,
                    first_aid_certification: false,
                    recommendation_one_name: Faker::Name.name,
                    recommendation_one_email: Faker::Internet.email,
                    recommendation_two_name: Faker::Name.name,
                    recommendation_two_email: Faker::Internet.email,
                    recommendation_three_name: Faker::Name.name,
                    recommendation_three_email: Faker::Internet.email,
                    phone_number: Faker::PhoneNumber.phone_number,
                    is_deleted: false,
                    active: true,
                    approved: true)
  end

  2.times do |index|
    Job.create!(user_id: 6,
                  date: Date.today,
                  start_time: Time.now,
                  end_time: 3.hours.from_now,
                  notes: Faker::Hipster.sentence(3, true, 4),
                  confirmed: false)
  end

2.times do |index|
  Job.create!(user_id: 7,
                date: Date.today,
                start_time: Time.now,
                end_time: 3.hours.from_now,
                notes: Faker::Hipster.sentence(3, true, 4),
                confirmed: true)
end

JobAssignment.create!(job_id: 1, user_id: 26)
JobAssignment.create!(job_id: 2, user_id: 27)
JobAssignment.create!(job_id: 3, user_id: 27)
