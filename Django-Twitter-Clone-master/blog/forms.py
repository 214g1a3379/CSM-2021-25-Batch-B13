from django import forms
from .models import Comment, Post


class NewCommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['content']


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['content', 'image']
        widgets = {
            'content': forms.Textarea(attrs={'rows': 3}),
        }
