from rest_framework import serializers


class SnippetSerializer(serializers.Serializer):
    
    user_text = serializers.CharField(style={'base_template': 'textarea.html'})
