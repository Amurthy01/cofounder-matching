# Generated by Django 4.0.1 on 2022-01-30 05:37

from django.db import migrations, models
import taggit.managers


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('taggit', '0004_alter_taggeditem_content_type_alter_taggeditem_tag'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='uploads/')),
                ('name', models.CharField(max_length=200)),
                ('tagline', models.CharField(max_length=500)),
                ('role', models.CharField(max_length=200)),
                ('location', models.CharField(max_length=200)),
                ('bio', models.TextField()),
                ('interests', models.TextField()),
                ('twitter', models.URLField()),
                ('linkedin', models.URLField()),
                ('portfolio', models.URLField()),
                ('instagram', models.URLField()),
                ('email', models.EmailField(max_length=254)),
                ('company', models.URLField()),
                ('skills', taggit.managers.TaggableManager(help_text='A comma-separated list of tags.', through='taggit.TaggedItem', to='taggit.Tag', verbose_name='Tags')),
            ],
        ),
    ]
