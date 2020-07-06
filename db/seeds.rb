User.create!(name:  "sample",
             email: "sample@sample.com",
             password:              "samplesample",
             password_confirmation: "samplesample")

# 追加のユーザーをまとめて生成する
99.times do |i|
  name  = Faker::Name.initials(number: 6)
  email = "example-#{i+1}@example.org"
  password = "password"
  User.create!(name:  name,
               email: email,
               password:              password,
               password_confirmation: password)
end
