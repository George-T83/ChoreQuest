from django.urls import path
from . import views

urlpatterns = [
    path('profile/',           views.get_user_profile),
    path('create/',            views.create_household),
    path('join/',              views.join_household),
    path('me/',                views.get_my_household),
    path('leave/',             views.leave_household),
    path('delete/',            views.delete_household),
    path('remove-member/',     views.remove_member),
    path('reset-leaderboard/', views.reset_leaderboard),
]