class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.string :name
      t.string :email
      t.string :rollno
      t.string :address

      t.timestamps
    end
  end
end
