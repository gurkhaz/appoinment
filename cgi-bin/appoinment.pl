#!C:\Perl\bin\perl.exe


 	use CGI; 
 	use strict;
  	use warnings;
  	use DBI;
  	use JSON;
	use Data::Dumper;
	
	print "Content-type: text/plain\n\n";
	use CGI::Carp qw(warningsToBrowser fatalsToBrowser); 
	my $cgi = CGI->new;
	my $description = $cgi->param("desc");
	my $time = $cgi->param("time");
	my $date = $cgi->param("date");
	
	

  # Connect to the database.
  my $dbh = DBI->connect("DBI:mysql:database=appoinment;host=localhost",
                         "root", "",
                         {'RaiseError' => 1});

  

  # Create a new table my_appoinment if not already exist
  
  $dbh->do("CREATE TABLE IF NOT EXISTS my_appoinment (id INTEGER AUTO_INCREMENT PRIMARY KEY, time VARCHAR(255), date DATE, description VARCHAR(255))");

 

  # insert appoinment in table
  $dbh->do("INSERT INTO my_appoinment (time, date, description) VALUES (?,?, ?)", undef, $time, $date, $description);
  

  


  # Disconnect from the database.
  $dbh->disconnect();