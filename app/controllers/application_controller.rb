class ApplicationController < ActionController::Base
  include Pundit
  protect_from_forgery with: :exception

  def after_sign_in_path_for(resource)
    if resource.manager?
      manager_root_path
    elsif resource.family?
      family_root_path
    elsif resource.nanny?
      nanny_root_path
    end
  end

  def after_sign_out_path_for(resource_or_scope)
    root_path
  end
end
