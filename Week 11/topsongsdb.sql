USE topsongsdb;

select * from top5000;
select * from topalbums;

SELECT songs.song, albums.album FROM top5000 AS songs
INNER JOIN topalbums AS albums
ON songs.year = albums.year AND songs.artist = albums.artist;