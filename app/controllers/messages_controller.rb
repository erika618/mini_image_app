class MessagesController < ApplicationController
  before_action :set_message, only: [:edit, :update]

  def index
    @messages = Message.all
  end

  def new
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @message.update(message_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def message_params
    # 画像の配列を受け取れるように変更
    # name属性の値を指定することで、その要素から送られた値が取得できる
    params.require(:message).permit(:content, images: [])
  end

  def set_message
    @message = Message.find(params[:id])
  end
end
