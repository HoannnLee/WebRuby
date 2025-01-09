class RenameDescriptionToDesInProducts < ActiveRecord::Migration[8.0]
  def change
    rename_column :products, :description, :des
  end
end

