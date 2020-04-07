if(@followees)
  @followees.each do |follow|
    json.set! follow.followed_user_id do #obejct of /users/77   77 :{ id: whatever follower_id: current_user, followed_user_id: 77}
      json.partial! 'api/follows/follows', follow: follow
    end
  end

end