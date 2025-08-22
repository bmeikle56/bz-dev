
## Setup

* `bz.zsh` contains the command line interface that powers Berzerk
* `config.zsh` is where secrets are stored

Once downloaded, run the following commands to properly move `bz-dev` 
and begin developing at Berzerk speed!

<add-later>


# make ticket
bz make -r=bz-dev -k=download-pg -n="add page, setup routing, allow download, setup steps"

# fetch tickets
bz fetch

# work on a ticket
bz workon -k=ipad-constraints

# pause a ticket
bz pause -k=ipad-constraints

# submit a PR
bz submit -r=poker-degen -k=allow-logout

# delete a ticket
bz delete -k=key -r=repo

# delete a repo
bz kill -r=repo

# clear all tickets
bz clear

# update me!
bz update