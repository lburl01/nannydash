class DashboardsController < ApplicationController

  def index
    @users = User.all
  end

  def families
    @families = User.family.all
  end

end
