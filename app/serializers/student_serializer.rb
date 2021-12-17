class StudentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :rollno, :address
end
