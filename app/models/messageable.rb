module Messageable
  extend ActiveSupport::Concern

      module ActiveRecordExtension
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
