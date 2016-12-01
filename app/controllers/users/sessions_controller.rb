module Users
  class SessionsController < Devise::SessionsController
    respond_to :json

    skip_before_action :verify_authenticity_token

   def new
     self.resource = resource_class.new(sign_in_params)
     store_location_for(resource, params[:redirect_to])
     super
   end

   def create
     resource = User.find_for_database_authentication(email: params[:user][:email])
     return invalid_login_attempt unless resource

     if resource.valid_password?(params[:user][:password])
       sign_in :user, resource
       return render nothing: true
     end

     invalid_login_attempt
    end

   def destroy
     sign_out(current_user)
     render :status => 200,
            :json => { :success => true,
                       :info => "Logged Out."}
    end

    protected

    def invalid_login_attempt
      set_flash_message(:alert, :invalid)
      render json: flash[:alert], status: 401
    end

  end
end
