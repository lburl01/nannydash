module Users
  class SessionsController < Devise::SessionsController
    respond_to :json

    skip_before_action :verify_authenticity_token

   def new
     self.resource = resource_class.new(sign_in_params)
     store_location_for(resource, params[:redirect_to])
     super
   end

   def destroy
     sign_out(current_user)
     render :status => 200,
            :json => { :success => true,
                       :info => "Logged Out."}
    end

  end
end
