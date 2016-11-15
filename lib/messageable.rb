module Messageable
  extend ActiveSupport::Concern

      module ActiveRecordExtension
        #Converts the model into messageable allowing it to interchange messages and
        #receive notifications
        def acts_as_messageable
          include Messageable
        end
      end

      included do
        has_many :messages, as: :sender
      end

      def hello
        "hello"
      end

    end
  end
end
