# Generated by Django 5.0.7 on 2024-08-06 05:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='tbl_register',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(default='', max_length=100)),
                ('pswd', models.CharField(default='', max_length=100)),
            ],
        ),
    ]
